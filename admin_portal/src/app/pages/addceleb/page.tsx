'use client';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddCelebPage() {
  const [movieId, setMovieId] = useState('');
  const [movies, setMovies] = useState<any[]>([]);
  const [celebType, setCelebType] = useState('cast');
  const [celebName, setCelebName] = useState('');
  const [celebRole, setCelebRole] = useState('');
  const [celebImage, setCelebImage] = useState('');
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      toast.info('Fetching movies...');
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/movie/movies`, {
          method: 'GET',
          credentials: 'include',
        });
        const data = await response.json();
        setMovies(data.data || []);
        toast.dismiss();
      } catch (err) {
        toast.error('Failed to fetch movies');
      }
    };

    fetchMovies();
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    toast.info('Uploading image...');

    const formData = new FormData();
    formData.append('myimage', file);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/image/uploadimage`, {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      const data = await res.json();
      if (data.ok && data.imageUrl) {
        setCelebImage(data.imageUrl);
        toast.success('Image uploaded');
      } else {
        toast.error(data.error || 'Upload failed');
      }
    } catch (err) {
      toast.error('Error uploading image');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.info('Adding celebrity...');
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/movie/addcelebtomovie`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          movieId,
          celebType,
          celebName,
          celebRole,
          celebImage,
        }),
      });

      const data = await res.json();
      if (data.ok) {
        toast.success('Celebrity added successfully!');
        setCelebName('');
        setCelebRole('');
        setCelebImage('');
        setMovieId('');
      } else {
        toast.error(data.message || 'Failed to add celeb.');
      }
    } catch (err) {
      toast.error('Error occurred');
    }
  };

  return (
    <div className="p-4 md:p-10 max-w-2xl mx-auto">
      <div className="bg-white p-6 shadow-md rounded-xl w-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-[#EF4444]">Add Cast or Crew to Movie</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-bold">Select Movie</label>
            <select
              value={movieId}
              onChange={(e) => setMovieId(e.target.value)}
              className="w-full border border-gray-300 p-2 bg-white rounded focus:outline-none focus:ring-2 focus:ring-[#EF4444]"
              required
            >
              <option value="">-- Select a movie --</option>
              {movies.map((movie: any) => (
                <option key={movie._id} value={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-bold">Type</label>
            <select
              value={celebType}
              onChange={(e) => setCelebType(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#EF4444]"
            >
              <option value="cast">Cast</option>
              <option value="crew">Crew</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-bold">Celebrity Name</label>
            <input
              type="text"
              value={celebName}
              onChange={(e) => setCelebName(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#EF4444]"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-bold">Celebrity Role</label>
            <input
              type="text"
              value={celebRole}
              onChange={(e) => setCelebRole(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#EF4444]"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-bold">Upload Celebrity Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className=" border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#EF4444] w-full file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#EF4444] text-white p-2 rounded w-full hover:bg-[#EF4444] disabled:opacity-60"
            disabled={uploading || !celebImage}
          >
            Add Celeb
          </button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop />
    </div>
  );
}

export default AddCelebPage;
