import { app } from './app';

console.log("✅ ** NPS ** ✅");
app.listen(process.env.PORT, () => { console.log(`servidor rodando na porta ${process.env.PORT}`); });
