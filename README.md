# C++ Fast Snippets

**C++ Fast Snippets** — это расширение для Visual Studio Code, которое позволяет быстро вставлять часто используемые конструкции C++: `#include <iostream>`, `main()`, циклы `for` и `while`, условные конструкции `if/else` с помощью горячих клавиш.

---

## Возможности

* Быстрая вставка `#include <iostream>` и `using namespace std;`
* Автоматическая вставка шаблона функции `int main()`
* Быстрая вставка цикла `for` и `while`
* Быстрая вставка условной конструкции `if/else`

Все вставки можно выполнять с помощью горячих клавиш.

---

## Установка

1. Скачайте расширение или установите через Visual Studio Code Marketplace.
2. Перезапустите VS Code после установки.

---

## Использование

После установки расширения откройте C++ файл и используйте команды или горячие клавиши для вставки конструкций.

### Горячие клавиши по умолчанию

| Команда                      | Windows/Linux | macOS       |
| ---------------------------- | ------------- | ----------- |
| Insert `#include <iostream>` | `Ctrl+Alt+I`  | `Cmd+Alt+I` |
| Insert `int main()`          | `Ctrl+Alt+M`  | `Cmd+Alt+M` |
| Insert `for(...)` loop       | `Ctrl+Alt+F`  | `Cmd+Alt+F` |
| Insert `while(...)` loop     | `Ctrl+Alt+W`  | `Cmd+Alt+W` |
| Insert `if/else`             | `Ctrl+Alt+E`  | `Cmd+Alt+E` |

### Примеры вставок

**Include + Namespace:**

```cpp
#include <iostream>
using namespace std;
```

**Main:**

```cpp
int main() {
    
    return 0;
}
```

**For loop:**

```cpp
for (int i = 0; i < n; i++) {
    
}
```

**While loop:**

```cpp
while (condition) {
    
}
```

**If/Else:**

```cpp
if (condition) {
    
} else {
    
}
```

---

## Сборка и разработка

Если вы хотите внести изменения или запустить расширение локально:

```bash
npm install
npm run compile
```

Для запуска в режиме наблюдения:

```bash
npm run watch
```

---

## Лицензия

MIT License © temik69
