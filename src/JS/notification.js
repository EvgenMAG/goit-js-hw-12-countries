import { error, defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';

defaults.styling = 'material';
defaults.icons = 'material';

function errorsNotifications(text) {
  error({
    title: 'Oh No!',
    type: 'error',
    //   text: 'Too manu matches found! Please enter more specific query!',
    width: '400px',
    minHeight: '10px',
    dir: 'left',
    delay: 3000,
    icon: true,
    sticker: false,
    animateSpeed: 'fast',
    closerHover: true,
    closer: true,
    animation: 'none',
    text: text,
  });
}

export default errorsNotifications;
