// layouts/ThemeTwoLayout/ThemeTwoLayout.jsx
import { useNavigate } from 'react-router-dom';
import { useThemeContext } from '../../themes/ThemeContext';

export default function ThemeTwoLayout() {
  const { toggleMode } = useThemeContext();
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <div className="flex justify-end gap-2 mb-4">
        <button onClick={() => navigate('/theme1')} className="px-4 py-2 bg-green-500 text-white rounded">Switch Theme</button>
        <button onClick={toggleMode} className="px-4 py-2 bg-gray-500 text-white rounded">Toggle Mode</button>
      </div>
      <div className="min-h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url(/assets/parallax.jpg)' }}>
        <div className="h-screen flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl">Parallax Portfolio</h1>
        </div>
      </div>
    </div>
  );
}