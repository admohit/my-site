export default function decorate(block) {
    [...block.children].forEach((row) => {
      [...row.children].forEach((col) => {
        const pic = col.querySelector('picture');
        if (pic) {
          const picWrapper = pic.closest('div');
          if (picWrapper && picWrapper.children.length === 1) {
            picWrapper.classList.add('banner-image');
          }
        } else {
            const colWrap = col.closest('div');
            colWrap.classList.add('banner-text')
        }
      });
    });
  }
  