import { useGetAllFavoritesQuery, useAddFavoriteMutation } from '../services/favoriteApi';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const useFavorite = () => {
    const { data: favorites = [], error, isLoading } = useGetAllFavoritesQuery();
    const [addFavorite, { isLoading: isAdding }] = useAddFavoriteMutation();

    useEffect(() => {
        if (error) {
            toast.error('Error fetching favorites');
        }
    }, [error]);

    const handleAddFavorite = async (favoriteData) => {
        try {
            await addFavorite(favoriteData).unwrap();
            toast.success('Favorite added successfully');
        } catch (error) {
            console.error('Error adding favorite:', error);
            toast.error('Error adding favorite');
        }
    };

    return {
        favorites,
        addFavorite: handleAddFavorite,
        loading: isLoading || isAdding
    };
};

export default useFavorite;
