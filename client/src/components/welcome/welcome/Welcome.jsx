import welcome from './welcome.module.css';
import welcome1 from '../../../assets/images/welcome1.svg'
import welcome2 from '../../../assets/images/welcome2.svg'
const Welcome = () => {
	return (
		<>
			<main className={welcome.main}>
				<section className={welcome.welcomeTitle}>
					<div className={welcome.title}>
						<h1 className={welcome.text}>Автоматизированное управление Active Directory</h1>
						<p className={welcome.desc}>AD Connect - это мощный, простой в использовании инструмент, который помогает управлять вашей средой Active Directory. Он разработан, чтобы упростить вашу жизнь путем автоматизации обычных задач и предоставления полезных функций, которые экономят время и уменьшают ошибки.</p>
					</div>
				</section>
				<section className={welcome.welcomeImages}>
					<div className={welcome.images}>
						<img src={welcome1} alt="img" />
						<img src={welcome2} alt="img" />
					</div>
				</section>
			</main>
		</>
	);
}

export { Welcome };