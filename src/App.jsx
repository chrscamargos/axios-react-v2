import { useState, useEffect } from "react";
import api from "./services/api";
import Header from './components/Header'
import Footer  from './components/Footer'
import ShowCard from './components/ShowCard'
import { Main, Grid, StatusMessage } from './App.styles'

export default function App() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function buscarShows() {
      try {
        setLoading(true)
        const response = await api.get('/shows');
        setShows(response.data.slice(0, 10));
      } catch (err) {
        setError('Ocorreu algum erro ao carregar as séries');
      } finally {
        setLoading(false);
      }
    }

    buscarShows();
  }, []);

  return (
    <>
      <Header />
      <Main>
        {loading && <StatusMessage>Carregando séries...</StatusMessage>}
        {error && <StatusMessage>{error}</StatusMessage>}
        {!loading && !error && (
          <Grid>
            {shows.map((item) => (
              <ShowCard
                key={item.id}
                name={item.name}
                image={item.image?.medium}
                language={item.language}
              />
            ))}
          </Grid>
        )}
      </Main>
      <Footer />
    </>
  );
}