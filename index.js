window.addEventListener('popstate', function(e) {
    // e.state is equal to the data-attribute of the last image we clicked
});
console.log('here')

history.pushState({some: 'some'}, null, '/1')
