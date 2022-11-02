import React, { useState } from 'react';
import { Image } from 'antd';
import PropTypes from 'prop-types';

/**
 * Onclick, displays a collection of images to showcase a product
 */
export const Collection = ({width, imagesurl}) => {
  const [visible, setVisible] = useState(false);
  
  const imageslist = [];

  for(let [i, url] of imagesurl.entries()) {
    imageslist.push(<Image key={i} src={url} width={width} />);
  }

  return (
    <>
      <Image
        preview={{ visible: true }}
        width={width}
        src=""
      />
      <div>
        <Image.PreviewGroup>
            {imageslist}
        </Image.PreviewGroup>
      </div>
    </>
  );
}

Collection.propTypes = {
  imagesurl: PropTypes.array,
  width: PropTypes.number,
};






