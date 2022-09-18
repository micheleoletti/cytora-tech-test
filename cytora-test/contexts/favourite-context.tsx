import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { People } from "../models/api";

interface FavouriteContextSchema {
  favouritePeople?: People[];
  addFavouritePeople?: (people: People) => void;
  removeFavouritePeople?: (people: People) => void;
  hasFavourite?: (people: People) => boolean;
  toggleFavourite?: (people: People) => void;
}

const storageKey = "favourite";

export const FavouriteContext = createContext<FavouriteContextSchema>({});

export function FavouriteProvider({ children }: PropsWithChildren) {
  const [favouritePeople, setFavouritePeople] = useState<People[]>([]);

  const addFavouritePeople = (people: People) => {
    setFavouritePeople((current) => {
      return [...current, people];
    });
  };

  const removeFavouritePeople = (people: People) => {
    setFavouritePeople((current) => {
      return current.filter((item) => item.url != people.url);
    });
  };

  const hasFavourite = (people: People) => {
    return favouritePeople.some((item) => {
      return item.url == people.url;
    });
  };

  const toggleFavourite = (people: People) => {
    if (hasFavourite(people)) removeFavouritePeople(people);
    else addFavouritePeople(people);
  };

  useEffect(() => {
    if (favouritePeople.length > 0)
      localStorage.setItem(storageKey, JSON.stringify(favouritePeople));
  }, [favouritePeople]);

  useEffect(() => {
    const storageData = localStorage.getItem(storageKey);

    if (storageData != null) setFavouritePeople(JSON.parse(storageData));
  }, []);

  return (
    <FavouriteContext.Provider
      value={{
        favouritePeople,
        addFavouritePeople,
        removeFavouritePeople,
        hasFavourite,
        toggleFavourite,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}

export function useFavourite() {
  return useContext(FavouriteContext);
}
