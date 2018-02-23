$(function () {
    $('#js-shopping-list-form').submit(function (event) {
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
        addEventListener();
    });
});
function addEventListener() {
    $('.shopping-item-toggle').unbind();
    $('.shopping-item-toggle').click(function (event) {
        toggle(event.currentTarget);
    });
    $('.shopping-item-delete').unbind();
    $('.shopping-item-delete').click(function (event) {
        remove(event.currentTarget);
    });
}

function toggle (item) {
    const shopItem = $(item).closest('li').find('.shopping-item');
    shopItem.toggleClass('shopping-item__checked');
}
function remove(item) {
    const shopItem = $(item).closest('li');
    shopItem.remove();
}

addEventListener();