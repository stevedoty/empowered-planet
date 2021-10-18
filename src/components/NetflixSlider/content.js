import React from 'react';
import IconCross from './../Icons/IconCross';
import './content.scss';

const Content = ({ movie, onClose }) => (
  <div className="content">
    <div className="content_background">
      <div className="content_background_shadow" />
      <div
        className="content_background_image"
        style={{ 'background-image': `url(&{movie.imageBg})` }}
      />
    </div>
    <div className="content_area">
      <div className="content_area_container">
        <div className="content_title">{movie.title}</div>
        <div className="content_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          et euismod ligula. Morbi mattis pretium eros, ut mollis leo tempus
          eget. Sed in dui ac ipsum feugiat ultricies. Phasellus vestibulum enim
          quis quam congue, non fringilla orci placerat. Praesent sollicitudin
        </div>
      </div>
      <button className="content_close" onClick={onClose}>
        <IconCross />
      </button>
    </div>
  </div>
);

export default Content;
