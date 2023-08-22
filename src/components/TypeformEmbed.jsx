import React from 'react';

class TypeformEmbed extends React.Component {
  componentDidMount() {
    // Додайте код для завантаження Typeform (якщо це необхідно)
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div
        data-tf-widget='mzMzJkRd'
        data-tf-opacity='100'
        data-tf-iframe-props='title=Моє портфоліо'
        data-tf-transitive-search-params
        data-tf-medium='snippet'
        style={{ width: '100%', height: '500px' }}
      ></div>
    );
  }
}

export default TypeformEmbed;
