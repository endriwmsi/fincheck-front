import Login from "../../assets/Login.png";

export function AuthLayout() {
  return (
    <div className="flex w-full h-full">
      <div className="w-1/2 h-full"></div>

      <div className="w-1/2 h-full p-8 flex justify-center items-center">
        <img
          src={Login}
          alt="login"
          className="object-contain relative w-full h-full max-w-[656px] max-h-[960px] rounded-[32px] select-none"
        />

        <div className="max-w-[656px] bottom-8 bg-white p-10 absolute rounded-b-[32px]">
          <p className="text-gray-700 font-medium text-xl">
            Gerencie suas finanças pessoais de uma forma simples com o Fincheck,
            e o melhor, totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  );
}
