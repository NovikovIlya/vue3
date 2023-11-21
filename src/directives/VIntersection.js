export default {
  mounted(el, binding) {
    console.log(el, binding);

    var options = {
      rootMargin: '0px',
      threshold: 1.0,
    };
    var callback = (entries, observer) => {
      if (entries[0].isIntersecting ) {
        console.log('ПЕРЕСЕЕЕК');
        binding.value();
      }
    };
    var observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  },
  name: 'Intersection'
};
