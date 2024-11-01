type InfoWindowContentProps = {
    name: string;
    description?: string;
    image?: string;
};

const InfoWindowContent = ({ name, description, image }: InfoWindowContentProps) => {
    return (
        <div className="max-w-xs">
            <h2 className="text-lg font-semibold m-0">{name}</h2>
            {image && <img src={image} alt={name} className="w-full mt-2" />}
            {description && <p className="text-sm mt-2">{description}</p>}
        </div>
    );
};

export default InfoWindowContent;