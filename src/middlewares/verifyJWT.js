import jwt from "jsonwebtoken";

const comprobarJWT = (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ message: "No posee un token" });
        }

        jwt.verify(token, process.env.JWT_SECRET, (error, verificarToken) => {
            if (error) {
                return res.status(401).json({ message: "Token inválido " });
            }

            if (verificarToken.rol === "admin" || verificarToken.rol === "usuario") {
                next();
            } else {
                return res.status(401).json({ message: "No tiene los permisos necesarios para acceder a esta ruta" });
            }
            
        });
    } catch (error) {
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export default comprobarJWT;