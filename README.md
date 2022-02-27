# nosql2h21-meshrooom

## Use cases

### Макет
![Сценарий](usecases.png)

### Модель данных

[Модель данных](модель%20данных.pdf)

### Endpoints

GET /projects - Получить список проектов

GET /project/{id} - Получить проект

POST /projects - Создать проект

DELETE /projects/{id} - Удалить проект

POST /project/{id}/edit - Отредактировать проект

POST /projects/search - Поиск по проектам

POST /metadata/search - Поиск по метаданным

### Запуск проекта

```
docker-compose up -d --force
```

После запуска backend будет доступен по адресу http://0.0.0.0