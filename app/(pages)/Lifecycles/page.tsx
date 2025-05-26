'use client';

import { useState } from 'react';
import { useEffect } from 'react';

// This component demonstrates the use of lifecycles in React.
// It logs the component's mount, update, and change events to the console.
// The component uses the useState and useEffect hooks to manage state and side effects.
// Lifecycles component mounted 1
// Lifecycles component updated 1
// Lifecycles component changed 1
// Lifecycles component mounted 2
// Lifecycles component updated 2
// Lifecycles component changed 2

export default function Lifecycles() {
  const [state, setState] = useState(1);

  console.log('Lifecycles component mounted', state);

  useEffect(() => {
    setState(2);
    console.log('Lifecycles component changed', state);
  }, [state]);

  console.log('Lifecycles component updated', state);

  return <>{state}</>;
}
