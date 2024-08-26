Active Directory User Session Management with Password Emailing

ОПИСАНИЕ ПРОЕКТА
	Этот проект предоставляет систему управления пользовательскими сессиями в Windows Server с интеграцией с Active Directory (AD). Включает функции генерации случайных паролей, их хеширования, аутентификации пользователей через AD, управления сессиями, и отправки сгенерированных паролей пользователям по электронной почте.

СТРУКТУРА ПРОЕКТА
project-root/
│
├── config/
│	├── ad.js		# Подключение и работа с Active Directory
│	├── db.js		# Подключение к базе данных SQL Server
│	└── mailer.js 		# Отправка email с паролем пользователю
│
├── scripts/
│	└── main.js		# Основной скрипт управления сессиями
│
├── .env 			# Конфигурационные переменные окружения
├── README.md 			# Описание проекта
└── package.json 		# Зависимости проекта и скрипты


Установка и настройка
1. Клонирование репозитория
	Сначала клонируйте репозиторий на локальную машину:
	git clone https://github.com/maYkiss56/Active-Directory-User-Session-Management-with-Password-Emailing.git
	cd yourproject

2. Установка зависимостей
	Установите необходимые зависимости, используя npm:
	npm install

3. Настройка .env файла
	Создайте файл .env в корне проекта, используя пример ниже, и замените параметры своими значениями:
	AD_URL=ldap://your-domain-controller.example.com
	AD_BASE_DN=dc=example,dc=com
	AD_USERNAME=admin@example.com
	AD_PASSWORD=your-password

	DB_USER=dbuser
	DB_PASSWORD=dbpassword
	DB_SERVER=localhost
	DB_DATABASE=YourDatabaseName
	DB_ENCRYPT=true

	SMTP_HOST=smtp.example.com
	SMTP_PORT=465
	SMTP_SECURE=true
	SMTP_USER=your-email@example.com
	SMTP_PASS=your-email-password
	SMTP_FROM='Your Company <noreply@example.com>'

5. Запуск проекта
	Для запуска проекта и тестирования функциональности используйте команду:
	node scripts/main.js
	Использование
	Генерация пароля и отправка email
	Скрипт session.js автоматически сгенерирует пароль, закодирует его, сохранит в базе данных, а затем отправит пользователю на указанный email.

Аутентификация пользователя
	При выполнении скрипта проверяется подлинность пользователя через Active Directory. Если аутентификация успешна, создается сессия.

Управление сессиями
	Создание сессии: Создается уникальный идентификатор сессии, и данные сессии сохраняются в памяти.
	Закрытие сессии: Сессия закрывается после завершения работы с пользователем.

Зависимости
	Проект использует следующие зависимости:

	nodemailer: Для отправки писем с паролем.
	bcrypt: Для хеширования паролей.
	mssql: Для подключения к базе данных SQL Server.
	activedirectory2: Для работы с Active Directory.
	dotenv: Для управления конфигурационными переменными окружения.
