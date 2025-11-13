import React from 'react';
import ClassesHero from '../components_classes/ClassesHero';
import ClassesPlans from '../components_classes/ClassesPlans';
import ClassesAgeGroups from '../components_classes/ClassesAgeGroups';
import ClassesSchedule from '../components_classes/ClassesSchedule';
import ClassesCTA from '../components_classes/ClassesCTA';

export default function Classes() {
  return (
    <main className="classes-page" aria-labelledby="classes-hero-title">
      <ClassesHero />
      <ClassesPlans />
      <ClassesAgeGroups />
      <ClassesSchedule />
      <ClassesCTA />
    </main>
  );
}
