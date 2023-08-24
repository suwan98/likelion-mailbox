function Lion({ className, width = '200px', height = '200px' }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 201 201"
        className={className}
      >
        <path
          fill="#030302"
          d="M150.713 172.542c.308 4.864-1.112 9.279-3.517 13.376-2.707 4.613-6.841 7.367-12.084 8.225-4 .653-7.701-.423-11.062-2.707-3.004-2.044-4.978-4.814-6.016-8.275-.02-.06-.05-.12-.121-.298l-1.718 1.799c-2.231 2.332-4.529 4.583-7.226 6.388-1.28.855-2.59 1.652-3.977 2.329-4.231 2.067-8.539 2.207-12.86.398-4.164-1.745-7.86-4.214-10.85-7.641-2.67-3.058-4.309-6.603-4.935-10.616-.078-.499-.208-.992-.272-1.494-.043-.342-.16-.318-.398-.168-1.193.754-2.252 1.685-3.34 2.57-1.511 1.226-3.036 2.442-4.71 3.44-2.168 1.293-4.453 2.144-7.039 1.702-2.134-.365-4.043-1.266-5.624-2.71-5.143-4.7-7.595-10.502-7.019-17.524.208-2.543.861-4.981 1.46-7.44.091-.365.131-.737.145-1.116.013-.358-.134-.486-.493-.479-1.38.024-2.733.221-4.087.472-2.65.493-5.27 1.143-7.95 1.461-3.38.402-6.642-.013-9.627-1.722-3.729-2.13-5.863-5.454-6.784-9.588-.64-2.864-.12-5.551 1.367-8.06.513-.867 1.206-1.584 1.933-2.271.462-.439.466-.435-.077-.821-1.658-1.176-3.23-2.455-4.573-3.99-3.722-4.241-5.923-9.165-6.593-14.766-.582-4.878-.194-9.662 1.474-14.305 1.086-3.025 2.764-5.661 5.344-7.651 2.385-1.84 5.051-2.697 8.073-2.312.154.02.372.124.462-.013.118-.184-.113-.312-.214-.442-1.876-2.443-3.434-5.059-4.425-7.987-1.126-3.316-1.44-6.733-1.186-10.21.311-4.245 1.166-8.376 2.74-12.342.935-2.352 2.1-4.576 3.85-6.445 1.269-1.357 2.776-2.325 4.632-2.68.272-.05.55-.06.858-.094-.221-1.022-.446-2.054-.399-3.099.332-7.655 3.531-13.604 10.446-17.25 3.932-2.073 8.19-3.078 12.619-3.279 2.54-.114 4.948.412 6.988 2.074.338.275.65.583.985.884.921-3.839 3.367-6.529 6.442-8.726 3.069-2.191 6.52-3.592 10.117-4.64 4.248-1.24 8.56-2.158 13.018-2.1 3.206.043 6.358.435 9.34 1.718 1.162.499 2.254 1.125 3.223 1.943 1.655 1.397 2.948 3.008 2.958 5.33.201-.024.298-.171.418-.272 2.325-1.922 4.928-3.42 7.669-4.613 3.212-1.396 6.596-2.294 10.063-2.867 2.65-.439 5.306-.807 8-.677 2.526.12 5.011.48 7.313 1.632a11.16 11.16 0 016.124 11.051c-.037.406-.081.81-.121 1.223.171.084.275-.054.392-.11 4.11-2.118 8.492-2.962 13.092-2.754 2.928.134 5.802.616 8.455 1.916 4.231 2.074 6.586 5.524 7.012 10.207.321 3.531-.717 6.784-2.369 9.866a29.077 29.077 0 01-4.861 6.62c-.067.07-.13.14-.234.254.482.1.918.185 1.353.282 3.072.693 5.749 2.2 8.275 4.016 1.852 1.33 3.588 2.784 4.975 4.623 2.69 3.558 3.544 7.555 3.035 11.94-.607 5.212-2.563 9.892-5.377 14.264-.653 1.015-1.32 2.03-1.833 3.126-.392.834-.318 1.333.335 1.996.912.921 1.96 1.679 2.999 2.45 1.852 1.373 3.541 2.9 4.824 4.837 1.698 2.569 2.64 5.416 3.115 8.438.285 1.799.241 3.571-.238 5.343-.737 2.731-2.368 4.778-4.706 6.285-2.282 1.474-4.727 2.593-7.36 3.283-.124.034-.248.074-.412.124.72.998 1.286 2.043 1.624 3.199.623 2.121.392 4.235-.047 6.355-.881 4.258-3.232 7.578-6.495 10.338-1.24 1.049-2.546 1.997-3.88 2.918-.773.533-.777.553-.465 1.434.831 2.365 1.534 4.764 1.705 7.276.295 4.322-.127 8.539-2.221 12.425-1.812 3.367-4.543 5.615-8.338 6.436-2.704.582-5.333.16-7.913-.691-1.022-.338-2.027-.73-3.075-1.098-.077.023-.107.037-.131.077z"
        ></path>
        <path
          fill="#D76700"
          d="M38.914 151.296c-1.619.305-3.203.506-4.818.442-6.24-.251-9.92-4.479-10.914-9.38-.627-3.095.235-5.752 2.583-7.899.398-.365.807-.72 1.119-1.166.643-.918.556-1.759-.228-2.556-.83-.847-1.86-1.444-2.77-2.184-4.211-3.41-6.898-7.789-8.097-13.042-1.263-5.53-1.002-11.008 1.001-16.351.838-2.234 2.127-4.188 3.967-5.755 2.113-1.806 4.525-2.46 7.262-1.99.737.127 1.481.254 2.238.274.714.02 1.35-.144 1.705-.824.356-.68.128-1.293-.308-1.866-.88-1.159-1.772-2.308-2.626-3.487-3.206-4.409-4.57-9.34-4.221-14.773.274-4.309 1.115-8.483 2.774-12.476.834-2.003 1.855-3.9 3.427-5.44.834-.818 1.775-1.474 2.961-1.612.8-.09 1.608-.117 2.298.516.546.5 1.414.396 1.863-.11.489-.553.532-1.474-.098-1.94-1.326-.985-1.494-2.432-1.48-3.819.067-6.737 2.814-11.993 8.857-15.283 2.998-1.631 6.265-2.428 9.621-2.897 1.464-.205 2.922-.252 4.392.02 2.298.422 3.766 1.916 4.982 3.748.646.972 1.125 2.027 1.55 3.113.235.6.765.87 1.425.794.562-.068.998-.503 1.095-1.096.057-.338-.067-.646-.191-.948-.469-1.126-.78-2.291-.838-3.51-.093-1.974.707-3.629 1.88-5.136 2.197-2.818 5.102-4.727 8.301-6.181 4.137-1.88 8.5-3.002 13.008-3.534 3.538-.42 7.052-.288 10.502.663 2.151.593 4.057 1.621 5.541 3.347.892 1.035 1.377 2.207 1.391 3.574.006.556 0 1.112.03 1.668.013.218-.174.533.151.64.338.107.68.275 1.051-.03a27.393 27.393 0 013.257-2.271c3.427-2.05 6.907-3.993 10.777-5.112 3.752-1.082 7.581-1.766 11.483-1.87 2.593-.07 5.166.228 7.545 1.404 3.159 1.561 5.055 5.17 4.603 8.667-.118.914-.292 1.805-.614 2.666-.241.647-.526 1.263-1.051 1.745a2.875 2.875 0 00-.483.617c-.388.62-.328 1.296.141 1.755.479.466 1.206.513 1.799.094.184-.13.392-.271.506-.459.747-1.236 1.966-1.896 3.152-2.576 3.685-2.114 7.692-2.958 11.913-2.864 2.603.057 5.155.445 7.554 1.49 3.48 1.521 5.47 4.221 5.893 7.997.348 3.105-.577 5.946-2.031 8.643-1.631 3.028-3.738 5.671-6.405 7.856-.087.073-.174.147-.258.224-.499.472-.653 1.062-.398 1.648.251.573.723.814 1.336.814 2.05-.01 4.03.362 5.936 1.113 2.634 1.038 4.912 2.646 7.076 4.432 1.531 1.263 2.75 2.78 3.691 4.536 1.236 2.304 1.518 4.767 1.32 7.326-.388 5.035-2.234 9.537-4.941 13.738a45.726 45.726 0 00-2.013 3.424c-1.186 2.248-.372 4.107 1.085 5.434 1.065.968 2.211 1.842 3.377 2.683 3.795 2.74 5.758 6.536 6.472 11.075.238 1.521.261 3.015-.147 4.516-.644 2.368-2.215 3.946-4.255 5.152a24.485 24.485 0 01-6.931 2.798c-.412.097-.827.194-1.213.381-.891.433-1.162 1.33-.64 2.175.232.375.493.733.774 1.075 1.592 1.95 1.923 4.171 1.565 6.603-.62 4.227-2.781 7.504-6.014 10.177a41.943 41.943 0 01-3.333 2.499c-.462.312-.898.653-1.276 1.069-.657.72-.881 1.548-.643 2.496.378 1.507.988 2.944 1.336 4.462.979 4.248.838 8.452-.656 12.549-1.082 2.965-3.012 5.239-6.05 6.375-2.245.837-4.526.677-6.798.054-1.216-.335-2.385-.798-3.564-1.237-.814-.301-1.645-.559-2.529-.502-1.183.074-1.846.864-1.695 2.043.666 5.287-.962 9.973-3.933 14.214-2.154 3.076-5.273 4.908-8.938 5.588-3.239.603-6.288-.167-9.092-1.926-2.854-1.792-4.686-4.308-5.544-7.554-.137-.52-.258-1.049-.509-1.531-.483-.935-1.484-1.213-2.362-.627-.667.446-1.273.972-1.846 1.535-1.759 1.711-3.387 3.554-5.246 5.159-2.087 1.802-4.342 3.36-6.841 4.552-3.393 1.615-6.854 1.762-10.314.335-4.014-1.655-7.555-4.023-10.369-7.383-2.234-2.663-3.53-5.742-4.05-9.169-.127-.838-.254-1.682-.522-2.492-.49-1.485-1.625-1.997-3.046-1.337-1.393.643-2.576 1.608-3.751 2.573-1.823 1.494-3.629 3.005-5.672 4.197-.998.58-2.054 1.015-3.203 1.179-1.779.255-3.36-.331-4.83-1.249-2.131-1.333-3.659-3.223-4.905-5.38-1.658-2.871-2.583-5.926-2.506-9.25.06-2.663.583-5.256 1.297-7.815.228-.818.425-1.648.419-2.506-.01-1.926-1.156-3.112-3.079-3.125-1.755-.011-3.484.281-5.2.619-1.654.305-3.306.63-4.997.965z"
        ></path>
        <path
          fill="#040201"
          d="M95.29 163.011c-1.219.998-2.435 1.933-3.872 2.533-2.975 1.239-5.393.385-6.954-2.446-1.039-1.886-1.575-3.939-2.007-6.027a75.644 75.644 0 01-1.136-7.413c-.047-.449-.248-.583-.64-.697-5.018-1.477-9.872-3.36-14.421-5.973-3.662-2.104-7.022-4.613-9.93-7.695-3.346-3.548-5.886-7.624-7.809-12.093a53.205 53.205 0 01-3.932-14.228c-.54-4.14-.52-8.278.036-12.418.543-4.007 1.474-7.91 3.156-11.598 2.16-4.734 5.333-8.707 9.236-12.12.734-.644 1.487-1.263 2.305-1.953-1.31-.325-2.365-.952-3.333-1.742-1.478-1.21-2.49-2.687-2.613-4.647-.134-2.134.536-3.993 2.167-5.39 1.92-1.648 4.214-2.342 6.73-2.184 3.26.204 5.648 3.042 5.35 6.294-.053.604-.144 1.2-.208 1.803-.013.14-.1.325.034.415.137.094.271-.06.395-.13a89.059 89.059 0 015.27-2.727c6.033-2.875 12.277-5.11 18.877-6.285 2.938-.523 5.893-.824 8.878-.814 1.309.003 2.606.154 3.906.332 1.031.144 2.083.147 3.129.227a46.102 46.102 0 0112.971 2.888c.931.355.934.355.928-.643-.014-2.308 1.222-3.943 2.921-5.293 1.146-.911 2.469-1.41 3.936-.995 1.829.516 2.962 1.83 3.722 3.514 1.028 2.288.757 4.523-.251 6.73-.205.446-.412.895-.667 1.31-.194.318-.124.466.178.65 1.872 1.142 3.695 2.359 5.42 3.712 5.879 4.616 10.958 9.963 14.743 16.445 3.427 5.866 5.22 12.2 5.25 19.018.027 6.422-1.052 12.623-3.612 18.539-2.867 6.623-7.145 12.144-12.87 16.542a51.624 51.624 0 01-7.199 4.657c-.329.174-.386.338-.275.683.563 1.759 1.286 3.471 1.598 5.3.318 1.872.569 3.752.258 5.655a6.029 6.029 0 01-.124.576c-.402 1.42-1.421 1.97-2.777 1.39-1.32-.566-2.576-1.28-3.886-1.869-2.489-1.119-4.999-2.191-7.498-3.287a38.987 38.987 0 01-3.504-1.758 1.23 1.23 0 00-.978-.131 74.225 74.225 0 01-9.289 1.752c-.279.034-.436.191-.597.379-2.898 3.376-5.869 6.683-9.192 9.654-.59.526-1.196 1.025-1.82 1.558z"
        ></path>
        <path
          fill="#FFC63E"
          d="M85.556 59.931c3.212-.924 6.405-1.765 9.674-2.284.228-.037.42-.03.65.08.443.211.938.262 1.434.278.871.027 1.729-.11 2.593-.174 2.338-.178 4.66-.037 6.991.235 7.511.867 14.55 3.202 21.132 6.857 8.673 4.82 15.839 11.316 21.119 19.768 4.623 7.397 6.197 15.484 5.182 24.12-.613 5.2-2.01 10.147-4.432 14.807-3.531 6.801-8.753 11.96-15.239 15.916-.657.399-1.337.761-1.99 1.166-.335.208-.489.188-.586-.235-.369-1.561-.761-3.112-1.153-4.666-.271-1.079-.569-2.151-.988-3.183-1.678-4.157-6.429-5.296-9.839-2.361-1.762 1.514-3.162 3.35-4.559 5.185a503.883 503.883 0 00-5.062 6.808c-.251.341-.432.395-.817.197-4.151-2.15-8.339-4.227-12.586-6.177-3.27-1.501-6.7-2.503-10.281-2.935-1.478-.177-2.905-.03-4.02 1.082-1.022 1.019-1.474 2.332-1.709 3.729-.435 2.586-.375 5.179-.13 7.775.053.583.053.59-.51.412-5.759-1.789-11.263-4.117-16.264-7.544-6.395-4.382-10.87-10.261-13.745-17.406-2.734-6.798-4.157-13.833-3.675-21.179.368-5.615 1.551-11.035 4.18-16.07 2.282-4.362 5.488-7.956 9.267-11.055 5.045-4.14 10.683-7.293 16.66-9.866 2.834-1.23 5.698-2.382 8.703-3.28z"
        ></path>
        <path
          fill="#D82D0D"
          d="M93.361 161.182c-.844.68-1.675 1.316-2.623 1.775a7.132 7.132 0 01-.86.355c-1.244.413-2.148.074-2.855-1.035-.975-1.531-1.447-3.249-1.836-4.991-.73-3.276-1.139-6.6-1.48-9.936-.225-2.198-.413-4.399-.279-6.606.074-1.19.138-2.389.61-3.508.48-1.132.888-1.39 2.114-1.316 2.355.14 4.59.82 6.817 1.534 2.375.76 4.596 1.879 6.817 2.991 2.764 1.381 5.575 2.667 8.305 4.114.399.211.379.345.134.663-3.564 4.59-7.336 8.995-11.534 13.025a54.263 54.263 0 01-3.33 2.935zM126.091 151.072c-2.781-1.237-5.581-2.342-8.204-3.826-1.21-.683-2.456-1.293-3.592-2.104-.509-.362-1.075-.623-1.645-.868-.19-.083-.314-.14-.137-.371 2.627-3.501 5.102-7.119 8.02-10.395.446-.5.935-.962 1.451-1.387 1.936-1.598 4.539-.962 5.487 1.356.566 1.381.918 2.828 1.243 4.278.733 3.307 1.762 6.53 2.861 9.729.599 1.752.797 3.564.897 5.397.021.355-.01.71-.11 1.088-2.07-1.005-4.117-2.03-6.271-2.897z"
        ></path>
        <path
          fill="#FCC43D"
          d="M61.637 69.194c-.302.292-.543.319-.841.014-.171-.178-.45-.258-.687-.365a10.695 10.695 0 01-3.139-2.148c-1.41-1.383-1.581-3.732-.288-5.23 1.571-1.818 3.625-2.535 5.99-2.13 1.749.298 2.931 1.873 2.975 3.755.023 1.076-.044 2.155.147 3.22.047.261-.17.288-.308.372a68.11 68.11 0 00-3.85 2.512z"
        ></path>
        <path
          fill="#FBC33D"
          d="M129.223 62.508c-.171.237-.308.083-.442.013a67.66 67.66 0 00-4.131-2.033.884.884 0 01-.499-.506c-.439-1.126-.479-2.235.184-3.29.657-1.048 1.498-1.883 2.724-2.265.653-.2 1.206-.097 1.745.315 1.447 1.113 2.094 3.24 1.555 5.183-.248.904-.66 1.738-1.136 2.583z"
        ></path>
        <path
          fill="#F1BB3B"
          d="M111.28 147.149c.54.238 1.045.455 1.675.73a58.72 58.72 0 01-4.1.794c.546-.7 1.028-1.31 1.501-1.926.117-.154.211-.084.325 0 .187.134.378.254.599.402z"
        ></path>
        <path
          fill="#020201"
          d="M92.835 96.366c.674-.643 1.31-1.273 2.188-1.591a7.631 7.631 0 015.182-.044c2.523.875 3.035 3.943 1.062 5.937-.623.626-1.367 1.045-2.2 1.326-1.907.643-3.833.58-5.74.07-1.175-.314-2.05-1.048-2.204-2.348-.114-.948.335-1.749.881-2.479.228-.311.533-.566.831-.87z"
        ></path>
        <path
          fill="#040301"
          d="M77.623 92.406c.084 1.377-.352 2.52-1.33 3.424-.717.663-1.622.784-2.399.385-.78-.402-1.122-1.062-.995-2.093.148-1.18.543-2.258 1.582-2.969 1.316-.9 2.757-.338 3.142 1.253zM120.828 92.564c-1.186 1.048-2.516 1.018-3.38-.047a1.74 1.74 0 01-.211-.328c-.828-1.652.566-4.151 2.395-4.308 1.122-.094 2.137.783 2.181 1.912.037 1.035-.242 1.97-.985 2.77z"
        ></path>
      </svg>
    </>
  );
}

export default Lion;
