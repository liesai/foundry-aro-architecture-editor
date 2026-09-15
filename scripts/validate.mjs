import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
const script = source.match(/<script>([\s\S]*?)<\/script>/)?.[1];

if (!script) throw new Error("Script principal introuvable");
new Function(script);

const data = script.match(/let nodes = (\[[\s\S]*?\]);\s*let scenarios = (\{[\s\S]*?\});\s*let foundations/);
if (!data) throw new Error("Données initiales introuvables");

const nodes = vm.runInNewContext(data[1]);
const scenarios = vm.runInNewContext(`(${data[2]})`);
const nodeIds = new Set(nodes.map(node => node.id));

if (nodeIds.size !== nodes.length) throw new Error("Identifiants de composants dupliqués");

let flowCount = 0;
for (const [scenarioId, scenario] of Object.entries(scenarios)) {
  if (!scenario.label || !Array.isArray(scenario.flows) || !Array.isArray(scenario.steps)) {
    throw new Error(`Scénario invalide : ${scenarioId}`);
  }
  for (const flow of scenario.flows) {
    flowCount++;
    if (!nodeIds.has(flow[0]) || !nodeIds.has(flow[1])) {
      throw new Error(`Lien orphelin dans ${scenarioId}: ${flow[0]} → ${flow[1]}`);
    }
  }
}

const referencedDomIds = [...script.matchAll(/getElementById\("([^"]+)"\)/g)].map(match => match[1]);
for (const id of new Set(referencedDomIds)) {
  if (!source.includes(`id="${id}"`)) throw new Error(`Élément DOM absent : ${id}`);
}

const externalDependencies = source.match(/<script[^>]+src=|<link[^>]+href=/g) || [];
if (externalDependencies.length) throw new Error("Une dépendance externe a été ajoutée");

console.log(`Validation réussie : ${nodes.length} composants, ${Object.keys(scenarios).length} scénarios, ${flowCount} liens.`);
