const Cards = ({titulo, texto}) => {
    return (
        <div className="shadow rounded-xl">
            <h3 className="text-3xl font-bold text-center rounded-b-none bg-gradient-to-r from-purple-600 to-blue-500 p-7 rounded-xl hover:bg-white">{titulo}</h3>
            <p className="p-6 text-center text-white rounded-t-none bg-fundocard rounded-xl">
                {texto}
            </p>
        </div>
    );
};

export default Cards;
