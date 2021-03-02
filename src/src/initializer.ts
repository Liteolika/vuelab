import astore from "@/store/modules/astore";

const init = (): Promise<void[]> => {

    const astoreInit = astore.init();

    return Promise.all([
        astoreInit
    ]);

};

export default init;