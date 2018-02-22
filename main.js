$(function(){
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        const item = $('.js-shopping-list-entry').val();
        $('.shopping-list').append(
          ` <li>
                <span class="shopping-item">${item}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
            </li>`);




      //console.log(item)
    });

    $('.shopping-item-toggle').click(function(event) {
        const shopItem = $(event.currentTarget).closest('li').find('.shopping-item');
        shopItem.toggleClass('shopping-item__checked');
        // //event.currentTarget
        // $(event.currentTarget);
        // //find parent 'li'
        // $(event.currentTarget).closest('li');
        // //find child '.shopping-item'
        
    });

    $('.shopping-item-delete').click(function(event) {
        
    });

});





console.log('hello');

