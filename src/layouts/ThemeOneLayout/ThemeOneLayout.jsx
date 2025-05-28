// layouts/ThemeOneLayout/ThemeOneLayout.jsx
import { useNavigate } from 'react-router-dom';
import { useThemeContext } from '../../themes/ThemeContext';

export default function ThemeOneLayout() {
  const { toggleMode } = useThemeContext();
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <div className="flex justify-end gap-2 mb-4">
        <button onClick={() => navigate('/theme2')} className="px-4 py-2 bg-blue-500 text-white rounded">Switch Theme</button>
        <button onClick={toggleMode} className="px-4 py-2 bg-gray-500 text-white rounded">Toggle Mode</button>
      </div>
      <section id="about" className="mb-4">About Section</section>
      <section id="projects" className="mb-4">Projects Section</section>
      <section id="contact">Contact Section</section>
    </div>
  );
}