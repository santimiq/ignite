//Media Resize
export const smallImage = (imagePath, size) => {
  const image = imagePath.match(/media\/screenshots/)
    ? imagePath.reaplce(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
      )
    : imagePath.reaplce("/media/games/", `/media/resize/${size}/-/games/`);
  return image;
};
