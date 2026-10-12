document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    var calcButton = document.getElementById('calc-button');
    var productSelect = document.getElementById('product');
    var quantityInput = document.getElementById('quantity');
    var resultOutput = document.getElementById('result');
    var errorOutput = document.getElementById('error');

    calcButton.addEventListener('click', function () {
        // Очищаем предыдущие сообщения
        errorOutput.textContent = '';
        resultOutput.textContent = '';

        var quantityValue = quantityInput.value.trim();

        // Регулярное выражение для проверки, что введены только целые положительные числа (больше 0)
        var regex = /^[1-9]\d*$/;

        if (!regex.test(quantityValue)) {
            errorOutput.textContent = 'Ошибка: введите корректное целое число больше 0!';
            return;
        }

        var price = parseInt(productSelect.value, 10);
        var quantity = parseInt(quantityValue, 10);

        var totalCost = price * quantity;

        resultOutput.textContent = 'Стоимость заказа: ' + totalCost + ' руб.';
    });
});