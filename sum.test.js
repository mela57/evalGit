// Dépendances nécessaires pour les tests
const { setOperateur, reset, calculer } = require('./calcul'); // Adapte le chemin en fonction de ton fichier

// Mock des éléments DOM pour les tests
let inputNb1, inputNb2, inputOperateur, inputRes;
let nb1, nb2, operateur, res, resModulo;

beforeEach(() => {
  // Initialisation des éléments DOM et variables avant chaque test
  inputNb1 = { value: '' };
  inputNb2 = { value: '' };
  inputOperateur = { value: '' };
  inputRes = { value: '' };

  nb1 = '';
  nb2 = '';
  operateur = '';
  res = '';
  resModulo = '';
});

describe('Tests des fonctions', () => {
  
  test('setOperateur doit définir l\'opérateur et mettre à jour l\'input', () => {
    setOperateur('+');
    expect(operateur).toBe('+');
    expect(inputOperateur.value).toBe('+');
  });

  test('reset doit réinitialiser toutes les valeurs', () => {
    // Simulation d'une situation où des valeurs sont déjà présentes
    inputNb1.value = '5';
    inputNb2.value = '3';
    inputOperateur.value = '+';
    inputRes.value = '8';

    nb1 = '5';
    nb2 = '3';
    operateur = '+';
    res = '8';

    reset();

    // Test que les valeurs ont été réinitialisées
    expect(inputNb1.value).toBe('');
    expect(inputNb2.value).toBe('');
    expect(inputOperateur.value).toBe('');
    expect(inputRes.value).toBe('');
    expect(nb1).toBe('');
    expect(nb2).toBe('');
    expect(operateur).toBe('');
  });

  test('calculer doit retourner le résultat d\'une addition correcte', () => {
    inputNb1.value = '5';
    inputNb2.value = '3';
    setOperateur('+');
    
    calculer();
    
    expect(inputRes.value).toBe('8');
  });

  test('calculer doit retourner le résultat d\'une soustraction correcte', () => {
    inputNb1.value = '5';
    inputNb2.value = '3';
    setOperateur('-');
    
    calculer();
    
    expect(inputRes.value).toBe('2');
  });

  test('calculer doit retourner le résultat d\'une multiplication correcte', () => {
    inputNb1.value = '5';
    inputNb2.value = '3';
    setOperateur('x');
    
    calculer();
    
    expect(inputRes.value).toBe('15');
  });

  test('calculer doit retourner le résultat d\'une division correcte', () => {
    inputNb1.value = '6';
    inputNb2.value = '3';
    setOperateur('/');
    
    calculer();
    
    expect(inputRes.value).toBe('2 reste 0');
  });

  test('calculer doit afficher un message d\'erreur si division par zéro', () => {
    inputNb1.value = '5';
    inputNb2.value = '0';
    setOperateur('/');
    
    global.alert = jest.fn(); // Mock de la fonction alert
    
    calculer();
    
    expect(global.alert).toHaveBeenCalledWith('Division par 0 impossible');
  });

  test('calculer doit afficher un message d\'erreur si un des entrées n\'est pas un nombre', () => {
    inputNb1.value = 'abc';
    inputNb2.value = '3';
    setOperateur('+');
    
    global.alert = jest.fn(); // Mock de la fonction alert
    
    calculer();
    
    expect(global.alert).toHaveBeenCalledWith('Veuillez entrer des nombres valides');
  });

  test('calculer doit afficher un message d\'erreur si l\'opérateur est inconnu', () => {
    inputNb1.value = '5';
    inputNb2.value = '3';
    setOperateur('%');
    
    global.alert = jest.fn(); // Mock de la fonction alert
    
    calculer();
    
    expect(global.alert).toHaveBeenCalledWith('Opérateur inconnu');
  });
});
