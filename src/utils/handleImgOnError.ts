export const handleImgOnError = ({ currentTarget }) => {
  currentTarget.onerror = null; // prevents looping
  currentTarget.src =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';
};
