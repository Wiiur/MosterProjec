import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { login, register } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try{
            if(isRegister) {
                await register(email, password);
            } else {
                await login(email, password);
            }
            navigate("dashboard");
        } catch (err) {
            setError("Erro ao autenticar. Verificar suas credenciais")
        }
    };

    return (
        <div>
            <h2>
                {isRegister ? "Criar conta" : "Login"}
            </h2>
            {error && <p style={{color: "red"}}>{error}</p>}
            <form onSubmit={handleSumit}>
                <input type="email" placehold="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <input type="password" placehold="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required/>
                <button type="submit">{isRegister ? "Registrar" : "Entrar"}</button>
            </form>
            <button onClick={() => setIsRegister(!isRegister)}>
                {isRegister ? "Ja tem uma conta ? Faça login" : "Não tem conta? Cadastra-se"}
            </button>
        </div>
    );
};

export default Login;