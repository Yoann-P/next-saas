import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";

const Page = () => {
    return (
        <main>
            <h1>Popular Companions</h1>

            <section className={"home-section"}>
                <CompanionCard
                    id={"123"}
                    name={"Neura, l'Exploratrice Intelligente & Futée"}
                    topic={"Voyage au cœur des réseaux neuronaux"}
                    subject={"science"}
                    duration={45}
                    color={"#E5D0FF"}
                />
                <CompanionCard
                    id={"456"}
                    name = {"Countsy, le Sorcier des Nombres"}
                    topic = {"Dérivées et Intégrales"}
                    subject={"math"}
                    duration={30}
                    color={"#FFDA6E"}
                />
                <CompanionCard
                    id={"789"}
                    name = {"Verba, la bâtisseuse de vocabulaire"}
                    topic = {"Merveilles de la littérature française"}
                    subject={"littérature"}
                    duration={30}
                    color={"#BDE7FF"}
                />

            </section>

            <section className={"home-section"}>
                <CompanionsList
                    title="Sessions Récentes Complétées"
                    companions={recentSessions}
                    classNames={"w-2/3 max-lg:w-full"}
                />
                <CTA/>
            </section>
        </main>
    )
}

export default Page