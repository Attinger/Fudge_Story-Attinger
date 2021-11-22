namespace Template {
  export async function Introduction(): fs.SceneReturn {

    await fs.Location.show(locations.classRoom);
    await fs.Speech.tell(character.narrator, "<em>“Hello wanderer, thank you for your time. This is of utmost importance, you have to bring this medicine to the black forest in the south immediately! Head there as fast as your feet will carry you, your troubles shall not be in vein. Travel safely, friend...”</em>");
  }
}