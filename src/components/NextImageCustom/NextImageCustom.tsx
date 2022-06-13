import { useState } from 'react';
import Image from 'next/image';

export const NextImageCustom = ({ alt, ...props }) => {
  const [src, setSrc] = useState(props.src);

  return (
    <Image
      unoptimized // to make it work in Storybook
      {...props}
      alt={alt} // to fix lint warning
      src={src}
      placeholder="blur"
      blurDataURL="/images/img-placeholder.png"
      onError={() => setSrc('/images/img-placeholder.png')}
    />
  );
};
