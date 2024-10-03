import home from './Home.module.css';
const Home = () => {
	return (
		<>
			<section className={home.home}>
				<div className={home.container}>
					<div className={home.header}>
						<h1 className={home.title}>ADHub</h1>
						<p className={home.definition}>- это инструмент для взаимодействия с active directory через веб-интерфейс.</p>
					</div>
				</div>
			</section>
		</>
	);
}


export { Home };