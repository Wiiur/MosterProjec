import { useAuth } from "../context/AuthContext";  // Importa o contexto de autenticação

const Header = () => {
  const { user, logout } = useAuth();  // Obtém o usuário logado e a função de logout

  return (
    <header>
      <h1>Academia Store</h1>
      {user && <button onClick={logout}>Sair</button>}  {/* Mostra o botão apenas se o usuário estiver autenticado */}
    </header>
  );
};

export default Header;
