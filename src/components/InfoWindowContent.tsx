type InfoWindowContentProps = {
    name: string;
    description?: string;
    image?: string;
  };
  
  const InfoWindowContent = ({ name, description, image }: InfoWindowContentProps) => {
    return (
      <div className="max-w-xs bg-white border border-gray-300 rounded-lg shadow-md p-4 overflow-auto max-h-64">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>
        {image && <img src={image} alt={name} className="w-full h-auto rounded-md mb-2" />}
        {description && <p className="text-sm text-gray-600">{description}</p>}
      </div>
    );
  };
  
  export default InfoWindowContent;
  