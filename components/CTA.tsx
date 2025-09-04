import Image from "next/image";
import Link from "next/link";

const Cta = () => {
    return (
        <section className={"cta-section"}>
            <div className={"cta-badge"}>Apprenez selon vos envies</div>
            <h2 className={"text-3xl font-bold"}>Concevez votre compagnon d’apprentissage sur mesure</h2>
            <p>Sélectionnez un nom, une matière, une voix et une personnalité,
                puis lancez-vous dans des conversations vocales qui rendent l’apprentissage naturel et amusant.
            </p>
            <Image
                src={"images/cta.svg"}
                alt={"cta"}
                width={362}
                height={232}
            />
            <button className={"btn-primary"}>
                <Image
                    src={"/icons/plus.svg"}
                    alt={"plus"}
                    width={12}
                    height={12}
                />
                <Link href={"/companions/new"}>
                    <p>Créer Votre Nouveau Compagnon</p>
                </Link>
            </button>
        </section>
    )
}
export default Cta
