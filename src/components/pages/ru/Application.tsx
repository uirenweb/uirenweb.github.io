export const Application = () => {
  return (
    <section className="application py-16">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center mb-8">
        Оставить заявку как:
      </h2>
      <div className="flex justify-center">
        <button className="button-64 application__student" role="button">
          <a href="https://docs.google.com/forms/d/1nOXPkkemXU3hsZ8svEwj--GM_uxQDmKuqDaVnVdkeww/edit" className="text">Ученик</a>
        </button>
        <button className="button-64 application__volunteer" role="button">
          <a href="https://docs.google.com/forms/d/1Qpm5JCqtGffLqoIqEjMUe7pcCJ0sSoBcUpONnjN-2Cc/edit" className="text">Волонтер</a>
        </button>
      </div>
    </section>
  );
};
