const { readFile, writeFile } = require("fs/promises");

const MERGE_TWA_MANIFEST_PATH = "twa-manifest.json";
const ACTUAL_TWA_MANIFEST_PATH = ".bubblewrap/subchords/twa-manifest.json";

async function run() {
    const mergeTwaManifest = await readFile(MERGE_TWA_MANIFEST_PATH, "utf-8");
    const mergeTwaManifestJson = JSON.parse(mergeTwaManifest);
    const actualTwaManifest = await readFile(ACTUAL_TWA_MANIFEST_PATH, "utf-8");
    const actualTwaManifestJson = JSON.parse(actualTwaManifest);

    const finalTwaManifestJson = Object.assign(actualTwaManifestJson, mergeTwaManifestJson);
    await writeFile(ACTUAL_TWA_MANIFEST_PATH, JSON.stringify(finalTwaManifestJson), "utf-8");
}

run().then(() => {
    console.log("Merging Completed Successfully");
}).catch((e) => {
    console.error("Error while Merging: ", e);
});
