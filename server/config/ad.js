import ActiveDirectory from 'activedirectory2';
import dotenv from 'dotenv';

dotenv.config();

const config = {
	url: process.env.AD_URL,
	baseDN: process.env.AD_BASE_DN,
	username: process.env.AD_USERNAME,
	password: process.env.AD_PASSWORD,
};

export const ad = new ActiveDirectory(config);

export const authenticateUser = (username, password) => {
	return new Promise((resolve, reject) => {
		ad.authenticate(username, password, (err, auth) => {
			if (err) {
				reject(`Ошибка аутентификации: ${err}`);
			} else if (auth) {
				resolve(true);
			} else {
				reject('Неверный логин или пароль');
			}
		});
	});
};
