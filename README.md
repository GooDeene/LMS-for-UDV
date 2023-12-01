# LMS-for-UDV
Пока тут будет информация по конфигурации, запуску приложения и по правилам работы с гит.

## Перед первым запуском
Действия в этом разделе только для Windows.
### Установка wsl
`wsl --install`

При вводе этой команды скачаются все необходимые фалы и после перезагрузки компьютера установится Ubuntu. Если wsl уже есть то этот раздел можно пропускать.

Когда придумываете пароль в Ubuntu, делайте его несложным, так как придётся его часто вводить.

### Установка Docker Desktop
Для windows скачиваем [Docker Desktop](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe) и просто устанавливаем с настройками по умолчанию.

На Mac можно поставить по [официальной инструкции](https://docs.docker.com/desktop/install/mac-install/).

## КАк запускать проект?
Перед началом работы нужно запустить Postgres. Он запускается из docker образа.
В windows можно просто нажать на файл `external_training\start_docker_compose.bat`. Тогда запустится сам Postgres и ещё pgAdmin. 

Также на Mac и в Windows можно запустить через консоль командой `docker-compose up -d`.

pgAdmin находится по адресу http://localhost:5050

Ура! теперь можно из IDE запускать проект, и всё должно работать.

## Правила работы с репозиторием
1. Для каждой задачи создаём отдельную ветку
2. Название ветки - короткое описание задачи, которая решается в ней. Пример: "creating-database-models".
3. При  пуше в мастер после решения всех конфликтов пробуем собрать и запустить проет. Посмотреть, что ничего не сломалось.

### Как пушить в мастер?
1. Выполняем `git pull --rebase origin master` в ветке, которую нужно запушить в мастер.
2. Исправляем конфликты, если они есть.
3. `git checkout main` переходим в main.
4. `git pull`
5. `git merge --no-ff <название ветки>`
6. `git push`