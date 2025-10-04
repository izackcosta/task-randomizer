import { useState } from "react";

export function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsername = (event: React.FormEvent<HTMLInputElement>) => setUsername((event.target as HTMLInputElement).value);
    const handlePassword = (event: React.FormEvent<HTMLInputElement>) => setPassword((event.target as HTMLInputElement).value);

    return(
        <div>
            <h1>Please login</h1>
            <form>
                <input type="text" placeholder="Username" value={username} onChange={handleUsername}/>
                <input type="password" placeholder="Password" value={password} onChange={handlePassword}/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}