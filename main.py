def define_env(env):
    @env.macro
    def ano_corrente():
        from datetime import date
        return date.today().year