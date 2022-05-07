namespace learnjs {
    export async function Home(): fs.SceneReturn {

        await fs.Speech.tell(null, "<p>Test</p>");
        await fs.Speech.hide();
    }
  }