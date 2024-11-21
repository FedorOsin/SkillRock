Задания:
JS Assessment
Инструкции
● Выполните следующие задания, используя только чистый JavaScript. ● Не используйте внешние библиотеки (например, jQuery). ● Предоставьте решения с комментариями и объяснениями, где это необходимо. ● Разрешено использовать современные функции JavaScript (ES6+).
Задание 1: Основные алгоритмические задачи (1 час)
1. Проверка на палиндром
Напишите функцию, которая проверяет, является ли строка палиндромом. Палиндром — это слово, фраза, число или другая последовательность символов, которая читается одинаково слева направо и справа налево (игнорируя пробелы, знаки препинания и регистр).
function isPalindrome(str) { // Ваш код здесь
}
Пример:
isPalindrome("А роза упала на лапу Азора"); // true isPalindrome("Привет"); // false
2. FizzBuzz
Напишите функцию, которая выводит числа от 1 до 100. Но для кратных трём выводите "Fizz" вместо числа, а для кратных пяти — "Buzz". Для чисел, кратных как трём, так и пяти, выводите "FizzBuzz".
function fizzBuzz() { // Ваш код здесь
}
3. Разбиение массива на части
Напишите функцию, которая разбивает массив на группы заданного размера.
function chunkArray(array, size) { // Ваш код здесь
}
Пример:
chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2); // [[1, 2], [3, 4], [5, 6], [7, 8]]
chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]
Задание 2: Манипуляции с DOM (1-1.5 часа)
1. Приложение для списка дел
Создайте простое приложение для списка задач, используя HTML, CSS и JavaScript.
Приложение должно включать следующие функции: ● Текстовое поле для добавления новых задач. ● Кнопка для добавления задачи в список. ● Возможность отметить задачу как выполненную (по клику на нее). ● Завершённая задача должна отличаться от незавершённой визуально. ● Кнопка для удаления задачи.
Требуется:
1. Манипулировать DOM для динамического добавления задач в список. 2. Обработать завершение и удаление задачи с помощью событий JavaScript.
Бонус: Добавьте возможность фильтрации задач (например, показать только завершённые или незавершённые задачи).
Задание 3: Асинхронный JavaScript (1.5 часа)
1. Fetch API — Случайные пользователи
Используйте Random User API, чтобы получить 10 случайных пользователей и отобразить их в виде списка. Для каждого пользователя нужно отобразить его имя, email и фотографию профиля.
Требуется:
● Использовать fetch для выполнения запроса к API. ● Обрабатывать состояние загрузки (например, показывать «Загрузка...», пока данные получаются). ● Обрабатывать ошибки в случае неудачи запроса к API (например, показывать сообщение «Не удалось загрузить пользователей»).
Пример:
function fetchRandomUsers() { // Ваш код здесь
}
2. Карусель изображений
Создайте карусель изображений, где изображения автоматически сменяются каждые 3 секунды. Также добавьте кнопки «Назад» и «Вперед» для ручной смены изображения.
Требуется:
● Использовать JavaScript для управления сменой изображений. ● Настроить таймер с помощью setInterval для автоматической смены изображений. ● Обработать кнопки «Назад» и «Вперед» с помощью событий.
Задание 4: Объектно-ориентированный JavaScript (1-1.5 часа)
1. Реализация простого калькулятора
Создайте класс Calculator, который симулирует работу простого калькулятора с методами:
● add(a, b) - возвращает сумму a и b. ● subtract(a, b) - возвращает разность a и b. ● multiply(a, b) - возвращает произведение a и b. ● divide(a, b) - возвращает результат деления a на b. Если b равно 0, возвращает сообщение об ошибке.
Создайте экземпляр класса и продемонстрируйте его использование, вызывая методы с разными аргументами.
class Calculator { constructor() { // Ваш код здесь
}
add(a, b) { // Ваш код здесь
}
subtract(a, b) { // Ваш код здесь
}
multiply(a, b) { // Ваш код здесь
}
divide(a, b) { // Ваш код здесь
}
}
2. Система управления библиотекой
Создайте класс Book с следующими свойствами: ● Название ● Автор ● ISBN
● Статус (взята или доступна) Далее создайте класс Library, который: ● Позволяет добавлять новые книги. ● Позволяет брать книгу по её ISBN. ● Позволяет возвращать взятую книгу по её ISBN. ● Показывает список доступных книг.
Реализуйте методы для управления книгами и их статусами.
class Book { constructor(title, author, isbn) { // Ваш код здесь
}
}
class Library { constructor() { // Ваш код здесь
}
addBook(book) { // Ваш код здесь
}
borrowBook(isbn) { // Ваш код здесь
}
returnBook(isbn) { // Ваш код здесь
}
listAvailableBooks() {
// Ваш код здесь
}
}
Задание 5: Решение проблем и оптимизация (1 час)
1. Функция debounce
Напишите функцию debounce. Эта функция должна гарантировать, что данная функция не вызывается слишком часто. При вызове она должна ожидать определенное количество времени перед выполнением. Если функция вызывается снова в течение этого времени, таймер должен быть сброшен.
function debounce(func, delay) { // Ваш код здесь
}
Пример:
const debouncedFunction = debounce(() => { console.log('Вызвана функция с задержкой'); }, 2000);
debouncedFunction(); debouncedFunction(); // Этот вызов должен сбросить таймер и предотвратить мгновенный вызов функции.
2. Глубокое клонирование объекта
Напишите функцию, которая выполняет глубокое клонирование объекта, т.е. вложенные объекты также должны быть склонированы, а не переданы по ссылке.
function deepClone(obj) { // Ваш код здесь
}
Пример:
const original = { name: 'John', address: { city: 'New York', country: 'USA'
}
};
const copy = deepClone(original); copy.address.city = 'Los Angeles'; console.log(original.address.city); // New York (оригинальный объект не должен измениться) console.log(copy.address.city); // Los Angeles
Руководство по сдаче
● Убедитесь, что ваш код чистый, хорошо прокомментирован и правильно отформатирован. ● Отправьте свой код в виде zip-файла или публичного репозитория на GitHub. ● Включите тестовые примеры, где это возможно.
Этот тест охватывает: 1. Основы алгоритмического мышления и решения задач. 2. Манипуляции с DOM. 3. Асинхронное программирование с использованием API. 4. Объектно-ориентированный JavaScript. 5. Понимание функций высшего порядка и оптимизации в JavaScript.
Удачи!