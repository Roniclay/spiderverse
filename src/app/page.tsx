import styles from "./page.module.scss";

import HeroesList from "@/components/HeroesList";
import { IHeroData } from "@/interfaces/heroes";

const getHeroesData = async (): Promise<{ data: IHeroData[] }> => {
  const res = await fetch(`${process.env.API_URL}/api/heroes`);
  if (!res.ok) {
    throw new Error("Failed to request heroes list");
  }

  return res.json();
};

export default async function Home() {
  const heroes = await getHeroesData();

  return (
    <main className={styles.main}>
      <HeroesList heroes={heroes.data} />
    </main>
  );
}
