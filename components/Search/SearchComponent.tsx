'use client';

import { ChangeEvent, useState } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

const users: User[] = [
    {
        id: 1,
        name: 'Ali',
        email: 'ali@gmail.com',
    },
    {
        id: 2,
        name: 'Rahul',
        email: 'rahul@gmail.com',
    },
    {
        id: 3,
        name: 'Arish',
        email: 'arish@gmail.com',
    },
    {
        id: 4,
        name: 'Jabir',
        email: 'jabir@gmail.com',
    },
    {
        id: 5,
        name: 'Kadir',
        email: 'kadir@gmail.com',
    },
    {
        id: 6,
        name: 'haris',
        email: 'haris@gmail.com',
    }
];

const SearchComponent = () => {
    const [search, setSearch] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">

                <h2 className="mb-4 text-2xl font-bold text-gray-800">
                    Search Users
                </h2>

                <input
                    type="text"
                    placeholder="Search users..."
                    value={search}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />

                <div className="mt-4">
                    <ul className="space-y-2">
                        {filteredUsers.map((user) => (
                            <li
                                key={user.id}
                                className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 transition hover:border-blue-200 hover:bg-blue-50"
                            >
                                <p className="font-semibold text-gray-800">
                                    {user.name}
                                </p>

                                <p className="text-sm text-gray-500">
                                    {user.email}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default SearchComponent;
