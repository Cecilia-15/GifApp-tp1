export const getGifs = async (category) =>{
        const API_KEY = '78s5WmQ8Cq06dbKeDIVy32DJ2xuQ6iDI';
      
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=${10}&offset=0&rating=g&lang=en`;
      
        const resp = await fetch(url);
      
        const { data } = await resp.json()
      
        const gifs = data.map(img => (
          {
            id: img.id,
            title: img.title,
            url: img.images.original.url
          }
        ))
      
        console.log("GIFS",gifs);
          return gifs;
      }