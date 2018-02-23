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

    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        const shopItem = $(event.currentTarget).closest('li').find('.shopping-item');
        shopItem.toggleClass('shopping-item__checked');
        // //event.currentTarget
        // $(event.currentTarget);
        // //find parent 'li'
        // $(event.currentTarget).closest('li');
        // //find child '.shopping-item'
        
    });

    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        const listItem = $(this).parent().parent();
        listItem.remove();
        //console.log(listItem);
        //console.log(this);
        //$('li').remove();
        //console.log('hello');
        // const deleteItem = $(event.currentTarget).
        // deleteItem.remove('li');
    });

});
